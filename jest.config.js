module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/src/.*\\.(test|spec)?\\.(ts)$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleNameMapper: {
    "^binarySearchTree/(.*)": "<rootDir>/src/binarySearchTree/$1",
    "^doublyLinkedList/(.*)": "<rootDir>/src/doublyLinkedList/$1",
    "^linkedList/(.*)": "<rootDir>/src/linkedListFast/$1",
    "^queue/(.*)": "<rootDir>/src/queue/$1"
},
};
