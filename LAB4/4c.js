function check_palindrome( str )
  {
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;//forward character
      let y = str[j-i];//backward character
      if( x != y)
      {
    
        return false;
      }
    }
  
    return true;
     
  }
 
  //function that print output is string is palindrome
  function palindrome( str )
  {
   
    let ans = check_palindrome(str);
   
    if( ans == true )
    {
      console.log("string is palindrome ");
    }
    else
    {
      console.log("string not a palindrome" ) ;
    }
  }
  // test variable
 
  let test = "Sedanur";
  let ex = "kajak";
  palindrome(test);
  palindrome(ex);
