// adapted based on rackt/history (MIT)
// Node 0.10+
import { execSync } from 'child_process';
import { stat } from 'fs';

// Node 0.10 check
if (!execSync) {
  execSync = require('sync-exec');
}

function exec(command) {
  execSync(command, {
    stdio: [0, 1, 2]
  });
}

stat('dist-modules', function (error, st) {
  // Skip building on Travis
  if (process.env.TRAVIS) {
    return;
  }

  if (error || !st.isDirectory()) {
    exec('npm i babel-cli babel-preset-es2015 babel-preset-react');
    exec('npm run dist:modules');
  }
});
