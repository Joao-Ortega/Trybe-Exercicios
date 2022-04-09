import notification from './notification';
import Book from './types';

export default class ReadingTracker {
  private readingGoal: number;

  private booksRead: number;

  private wishlist: Book[];

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    this.wishlist = [];
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      notification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    notification(
      'There are still some books to go!',
    );
  }

  addToWishList(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const readTracker = new ReadingTracker(20);
readTracker.addToWishList({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
readTracker.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);