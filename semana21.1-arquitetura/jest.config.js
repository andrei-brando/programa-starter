module.exports = {
  // arquivos que vão entrar no coverage
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  // diretório onde será gerado os relatórios de cobertura de testes
  coverageDirectory: 'coverage',
  // diretórios que vão ser ignorados pelo coverage
  coveragePathIgnorePatters: [
    '\\\\node_modules\\\\',
    '<rootDir>/src/core/infra/data/database/migrations',
  ],
  // diretório onde vai ter os testes
  roots: [
    '<rootDir>/tests',
  ],
  // ambiente onde será rodado os testes
  testEnvironment: 'node',
  // transpila os testes de ts para js e roda
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
}