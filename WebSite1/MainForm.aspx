<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MainForm.aspx.cs" Inherits="MainForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
    .text {
        width:100%;
        font-family:Garamond;
        text-align:center;
        font-size:xx-large;
    }
    .main {
        top: 50%;
        left: 50%;
        width: 800px;
        height: 500px;
        position: absolute;
        margin-top: -250px;
        margin-left: -400px;
    }
    .tb {
        width:60%;
        margin-left:20%;
        height: 40px;
	 font-size:xx-large;
    }
    .button {
        width:40%;
        margin-left:30%;
        font-size:xx-large;
    }
    .lbl {
        margin-left:30%;
        font-size:xx-large;
    }
</style>

</head>
<body>
    <form id="form1" runat="server">
        <h1 class="text">Расчет степени</h1>
        <p class="text">Введите число</p>
        <asp:TextBox ID="tbNumb" runat="server" CssClass="tb"></asp:TextBox>
        <br />
        <p class="text">Введите степень</p>
        <asp:TextBox ID="tbPower" runat="server" CssClass="tb"></asp:TextBox>
        <br />
        <asp:Button ID="btnCalc" runat="server" Text="Расчет" CssClass="button" OnClick="btnCalc_Click"/>
        <br />
        <asp:Label ID="lblResult" runat="server" Text="" CssClass="lbl"></asp:Label>
        <br />
    </form>
</body>
</html>
