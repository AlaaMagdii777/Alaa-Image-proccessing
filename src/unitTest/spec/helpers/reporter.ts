import {DisplayProcessor,SpecReporter,StacktraceOption,} from 'jasmine-spec-reporter';
//Create - Reporter
jasmine.getEnv().clearReporters() 
jasmine.getEnv().addReporter(
  new SpecReporter({
    // add jasmine-spec-reporter
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
  })
)