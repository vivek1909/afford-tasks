import {fibonacci} from './index';
import * as chai from 'chai';

const expect = chai.expect;
describe('My fibonacci program', () => {
  it('should return 2 for 3 as nth value' , () => {
    expect(fibonacci(3)).to.equal(2);
  });
  it('should return 102334155 for 40 as nth value' , () => {
    expect(fibonacci(40)).to.equal(102334155);
  });
  it('should return 1 for 1 as nth value' , () => {
    expect(fibonacci(1)).to.equal(1);
  });
  it('should return 0 for 0 as nth value' , () => {
    expect(fibonacci(0)).to.equal(0);
  });
});