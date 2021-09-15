var expect = require("chai").expect;

expect(true).to.be.true;


function idNumberVerify(idNumber) {
    if(parseInt(idNumber))
    {  
        var month = idNumber.toString().substr(2,2)
        if (parseInt(month) < 13)
        {
            var day = idNumber.toString().substr(4,2)
            if (parseInt(day) < 32)
            {
                var SSSS = idNumber.toString().substr(6,4) 
                if(SSSS <=9999 && SSSS >=0001)
                {
                   if(idNumber.toString().length == 13 )
                   {
                       Citizenship = idNumber.toString().substr(10,1)
                       if (Citizenship <= 1)
                       {
                           return true
                       }
                   }
                }
            }
        }
    
    }
    else 
    {
        return false
    }
}       



expect(idNumberVerify(9608275155082)).to.be.true;
expect(idNumberVerify(9902225788183)).to.be.true;
expect(idNumberVerify(0000000000000000000)).to.be.false;
