"use strict";
// import {DisplayProcessor,SpecReporter,StacktraceOption,} from 'jasmine-spec-reporter';
// //Create - Reporter
// jasmine.getEnv().clearReporters() 
// jasmine.getEnv().addReporter(
//   new SpecReporter({
//     // add jasmine-spec-reporter
//     spec: {
//       displayStacktrace: StacktraceOption.NONE,
//     },
//   })
// )
Object.defineProperty(exports, "__esModule", { value: true });
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
class CustomProcessor extends jasmine_spec_reporter_1.DisplayProcessor {
    displayJasmineStarted(info, log) {
        return `${log}`;
    }
}
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
    spec: {
        displayStacktrace: jasmine_spec_reporter_1.StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
}));
