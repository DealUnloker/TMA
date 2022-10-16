using System;


public partial class MainForm : System.Web.UI.Page
{
    protected string Product;
    protected string Quantity;
    protected string Price;

    protected static int ID = 10;


    protected void Page_Load(object sender, EventArgs e)
    {
        Product = Request["product"];
        Quantity = Request["quantity"];
        Price = Request["price"];
        string Type = Request["type"];
        switch (Type)
        {
            case "insert":
                Insert();
                Refresh();
                break;
            case "update":
                Update();
                Refresh();
                break;
            case "delete":
                Delete();
                Refresh();
                break;
        }

    }

    protected void btnInsert_Click(object sender, EventArgs e)
    {
        Set();
        Insert();
        Refresh();

    }

    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        Set();
        Update();
        Refresh();

    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        Set();
        Delete();
        Refresh();

    }


    public void Insert()
    {
        SqlDataSource2.InsertCommand = "INSERT INTO Store(Id, Product, Count, Price) VALUES('"+ ID++ + "', '" + Product + "', '" + Quantity + "', '" + Price + "'); ";
        SqlDataSource2.Insert();
    }

    public void Update()
    {
        SqlDataSource2.UpdateCommand = "UPDATE Store SET Count = '" + Quantity + "',Price = '" + Price + "' WHERE Product = '" + Product + "';";
        SqlDataSource2.Update();
    }

    public void Delete()
    {
        SqlDataSource2.DeleteCommand = "DELETE FROM Store WHERE Product = '" + Product + "';";
        SqlDataSource2.Delete();
    }

    protected void Refresh()
    {
        GridView1.DataBind();
        GridView1.Visible = true;
        tbProduct.Text = "";
        tbQuantity.Text = "";
        tbPrice.Text = "";
    }

    protected void Set()
    {
        Product = tbProduct.Text;
        Quantity = tbQuantity.Text;
        Price = tbPrice.Text;
    }
}