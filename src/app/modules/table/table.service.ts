import { ILockRecord } from "./table.interface";

let lockRecords: ILockRecord[] = [
  {
    tableId: "table-001",
    userId: "user-abc",
    expiresAt: new Date("2025-06-29T12:00:00Z"),
  },
  {
    tableId: "table-002",
    userId: "user-def",
    expiresAt: new Date("2025-07-29T12:05:00Z"),
  },
];

const lockTable = (tableId: string, userId: string, duration: number) => {
  const ifLockExists = lockRecords.find(
    (lockRecord) => lockRecord.tableId === tableId
  );
  if (ifLockExists) {
    return {
      status: 409,
      response: {
        success: false,
        message: "Table is currently locked by another user.",
      },
    };
  }

  const newLockRecord: ILockRecord = {
    tableId,
    userId,
    expiresAt: new Date(Date.now() + duration * 1000),
  };
  lockRecords.push(newLockRecord);
  
  return {
    status: 200,
    response: { success: true, message: "Table locked successfully." },
  };
};

const unlockTable = (tableId: string, userId: string) => {
  const prevRecordNumber = lockRecords.length;

  lockRecords = lockRecords.filter(
    (lockRecord) =>
      !(lockRecord.tableId === tableId && lockRecord.userId === userId)
  );

  if (prevRecordNumber === lockRecords.length) {
    return {
      status: 401,
      response: {
        success: false,
        message: "You cannot unlock table locked by other user",
      },
    };
  }
  
  return {
    status: 200,
    response: { success: true, message: "Table unlocked successfully." },
  };
};

const getTableStatus = (tableId: string) => {
  const queryTable = lockRecords.find(
    (lockRecord) => lockRecord.tableId === tableId
  );

  if(!queryTable){
  return {
    status: 200,
    response: { message: 'Table does not exist.' },
  };
  }

  const isLockExpired = (queryTable as ILockRecord).expiresAt.getTime() <= Date.now();

  return {
    status: 200,
    response: { isLocked: !isLockExpired },
  };
};

export const TableServices = {
  lockTable,
  unlockTable,
  getTableStatus,
};
