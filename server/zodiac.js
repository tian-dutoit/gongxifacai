/*
Submitted by David Gardner (davidgardner7@yahoo.com)
Featured on JavaScript Kit (http://javascriptkit.com)
For this and over 400+ free scripts, visit http://javascriptkit.com
*/

function getZodiac (year) {

        let toyear = 1997;
        let birthyear = year
        let zodiac="Ox"

        let x = (toyear - birthyear) % 12
        if ((x == 1) || (x == -11)) {
            zodiac="rat"      }
            else  {
             if (x == 0)             {
             zodiac="cow"           }
             else  {
              if ((x == 11) || (x == -1)) {
              zodiac="tiger"          }
              else  {
               if ((x == 10) || (x == -2)) {
               zodiac="rabbit"         }
               else  {
                if ((x == 9) || (x == -3))  {
                zodiac="dragon"         }
                else  {
                 if ((x == 8) || (x == -4))  { 
                 zodiac="snake"          }
                 else  {
                  if ((x == 7) || (x == -5))  { 
                  zodiac="horse"          }
                  else  {
                   if ((x == 6) || (x == -6))  { 
                   zodiac="sheep"          }
                   else  {
                    if ((x == 5) || (x == -7))  {  
                    zodiac="monkey"         }
                    else  {
                     if ((x == 4) || (x == -8))  {
                     zodiac="rooster"        }
                     else  {
                      if ((x == 3) || (x == -9))  {
                      zodiac="dog"            }
                      else  {
                       if ((x == 2) || (x == -10))  {
                       zodiac="pig"             }  
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
        return zodiac

}

module.exports = {
  getZodiac
}
