import { IStreamLogger } from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger {
  private static logger: ConsoleLogger;

  private constructor() {}

  public static getInstance() {
    if (!ConsoleLogger.logger) {
      ConsoleLogger.logger = new ConsoleLogger();
    }
    return ConsoleLogger.logger;
  }

  log(...args: any[]): void {
    console.log(...args);
  }
  error(...args: any[]): void {
    console.log(...args);
  }
  end(): void {
    console.log("The end!");
  }
}
