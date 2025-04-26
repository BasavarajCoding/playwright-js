const {Loginpage}=require('./Loginpage')
const {DashboardPage}=require('./DashboardPage')

class POManager
{

constructor(page)
{
    this.page = page;
    this.loginPage = new Loginpage(this.page);
    this.dashboardPage = new DashboardPage(this.page);

}
getLoginpage()
{
return this.loginPage;

}

getDashboardpage()
{
    return this.dashboardPage;
}


}
module.exports = {POManager};