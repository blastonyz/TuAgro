'useCLient'
import React from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


const FourthSection = ()=> {
 

  return (
    <div>
     
      <Button
        variant="contained"
        startIcon={<AddShoppingCartIcon />}
        
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default FourthSection