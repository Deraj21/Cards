const rankOrder = [ 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King' ];
const suitOrder = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ];

const orders = {
  ranks: rankOrder,
  suits: suitOrder,
  isGreaterThan: (card1, card2) => {
    // get index of rank & suit for both cards
    let cardOneRank = rankOrder.findIndex( item => card1.rank === item );
    let cardOneSuit = suitOrder.findIndex( item => card1.suit === item );
    let cardTwoRank = rankOrder.findIndex( item => card2.rank === item );
    let cardTwoSuit = suitOrder.findIndex( item => card2.suit === item );
  
    if (cardOneRank > cardTwoRank) {
      return true;
    }
    if (cardOneRank < cardTwoRank) {
      return false;
    } else {
      if (cardOneSuit > cardTwoSuit) {
        return true;
      }
      if (cardOneSuit < cardTwoSuit) {
        return false;
      } else {
        return null;
      }
    }
  }
};

export default orders;
