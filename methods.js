//Using string methods to filter an mpesa message to get what we need
const mpesaMessage ="XXXYYYZZZ5 Confirmed. Ksh1,030.00 sent to MSEE FULANI HAPO +254722222222 on 23/4/21 at 2:38 PM. New M-PESA balance is Ksh7. Transaction cost, Ksh22.00. Amount you can transact within the day is 297,420.00. SAFARICOM ONLY CALLS YOU FROM 0722000000. To reverse, forward this message to 456."
//Please analyze this message using string methods to retrieve amount, name of the person sent to, their number and the date
const mpesaAmount = mpesaMessage.split(" sent")
console.log(mpesaAmount)














