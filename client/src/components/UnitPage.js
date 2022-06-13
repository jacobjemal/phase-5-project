import React, {useState, useEffect} from "react";

function UnitPage() {

      useEffect(() => {
        fetch("/units")
          .then((r) => r.json())
          .then((units) => console.log(units));
      }, []);

    return (
        <main>
          
        </main>
      );
}
export default UnitPage;