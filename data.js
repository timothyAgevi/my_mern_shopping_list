try {
    db.items.insertMany( [
       { name: "card" },
       { name: "envelope" },
       { name: "stamps"  }
    ] );
 } catch (e) {
    print (e);
 }