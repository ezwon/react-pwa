import config from "@config";

export default class consoleLog {
  static display(...params) {
    if (config.SANDBOX) {
      console.log(...params);  // eslint-disable-line no-console
    }
  }
}
