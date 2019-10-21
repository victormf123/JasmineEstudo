import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  // Arrange
  let component: VoteComponent

  beforeEach(() => {
    component = new VoteComponent()
  })

  afterEach(() => {}) //
  beforeAll(() => {}) // Executa uma vez antes de todos os teste
  afterAll(() => {}) // Executa uma vez depois de todos os teste

  it('should increment totalVotes when upvoted', () => {
    // Act
    component.upVote()

    // Assert
    expect(component.totalVotes).toBe(1)
  });

  it('should decrement totalVotes when downvoted', () => {
    // Act
    component.downVote()

    // Assert
    expect(component.totalVotes).toBe(-1)
  });
});