/* eslint-disable no-console */
import { Server } from "http";
import app from "./app";
import { envVars } from "./app/configs/env";

let server: Server;

const startServer = async () => {
  try {
    console.log(`Running server in ${envVars.NODE_ENV} mode`)
    server = app.listen(envVars.PORT, () => {
      console.log(`Server stated on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected... Server shutting down...",err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.log("Uncaught Exception detected... Server shutting down...",err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log("SIGTERM signal recieved... Server shutting down...");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on('SIGINT', () => {
  console.log("SIGINT signal recieved... Server shutting down...");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});


// unhandled rejection error
// Promise.reject(new Error("I forgot to catch this promise"))

//uncaught exception error
// throw new Error("I forgot to handle this local error")
/**
 * unhandled rejection error
 * uncaught rejection error
 * signal termination sigterm
 */
