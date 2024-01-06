module.exports = {
  default: {
    formatOptions: {
      snippetInterface: 'async-await',
    },
    dryRun: false,
    requireModule: ['ts-node/register'],
    paths: ['features/**/*.feature'],
    require: ['step-definitions/**/*.ts', 'hooks/world.ts'],
    format: ['html:cucumber-report.html'],
  },
};
