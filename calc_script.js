// expr displayed on calc displayed
var expr = "";
//screen var
var screen = document.getElementById("screen");
//buttons
var operators = document.getElementsByClassName('op');
var numbers = document.getElementsByClassName('num');
var scrs = document.getElementsByClassName('scr');

//getting numbers
for(number of numbers)
{
    number.addEventListener('click' , (E) => 
    {
        Text = E.target.innerText;
     
        expr += Text;
        screen.value = expr;
    })
}

//reading operators
for(operator of operators)
{
    operator.addEventListener('click' , (E) => 
    {
        Text = E.target.innerText;
        
         if(Text == '=')
         {
            screen.value = eval(expr);
            expr = "";
         }

        else 
        {
            expr+= Text;
            screen.value = expr;
        }
    })
}

//delete and clear screen key
for(scr of scrs)
{
    scr.addEventListener('click' , (E) => 
    {
        Text = E.target.innerText;

        if(Text == 'C')
        {
             screen.value = "";
              expr = "";
          }
          else if(Text == 'DEL')
          {
              expr= expr.substr(0, expr.length-1);
              screen.value = expr;
          }
    })
}
