class Transaction {
   public id: number;
   public title: string;
   public value: number;
   public type: string;

   constructor(id: number, title: string, value: number, type: string) {
      this.id = id;
      this.title = title;
      this.value = value;
      this.type = type;
   }
}

export default Transaction;