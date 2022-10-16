using System;


public partial class MainForm : System.Web.UI.Page
{
    protected Int64 numb;
    protected int power;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Int64.TryParse(Request["numb"], out numb) & Int32.TryParse(Request["power"], out power))
            Calc();
        else
            lblResult.Text = "Введите число и степень";

    }

    protected void btnCalc_Click(object sender, EventArgs e)
    {
        if (Int64.TryParse(tbNumb.Text, out numb) & Int32.TryParse(tbPower.Text, out power))
            Calc();
        else
            lblResult.Text = "Введите число и степень";
    }

    protected void Calc()
    {
        Int64 result = numb;
        bool check = false;
        int i;
        for (i = 1; i < power; i++)
        {
            result = result * numb;
            if (result < 0)
                check = true;
        }
        if (check == true)
            lblResult.Text = "Результат слишком большой";
        else
            lblResult.Text = Convert.ToString(result);
    }


}