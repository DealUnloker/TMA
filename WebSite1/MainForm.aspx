<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MainForm.aspx.cs" Inherits="MainForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .text {
            font-size: xx-large;
        }
    </style>
</head>
<body>
    <h1>База данных магазина</h1>
    <p style="height: 25px" class="text"><strong>Форма ввода изменений в магазине</strong></p>
    <form id="form2" runat="server" style="font-size: xx-large">
        <table style="width: 50%; height: 162px;">
            <tr>
                <td class="text"><strong>Продукт</strong></td>
                <td>
                    <asp:TextBox ID="tbProduct" runat="server" Width="100%"
                        Font-Bold="True" Font-Size="X-Large"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="text"><strong>Количество</strong></td>
                <td>
                    <asp:TextBox ID="tbQuantity" runat="server" Width="100%"
                        Font-Bold="True" Font-Size="X-Large"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="text"><strong>Цена</strong></td>
                <td>
                    <asp:TextBox ID="tbPrice" runat="server" Width="100%" Font-Bold="True"
                        Font-Size="X-Large"></asp:TextBox>
                </td>
            </tr>
        </table>
        <asp:Button ID="btnInsert" runat="server" Font-Bold="True"
            Font-Size="X-Large" Height="49px" Text="Добавить" Width="15%" OnClick="btnInsert_Click" />
        <asp:Button ID="btnUpdate" runat="server" Font-Bold="True"
            Font-Size="X-Large" Height="49px" Text="Изменить" Width="15%" OnClick="btnUpdate_Click" />
        <asp:Button ID="btnDelete" runat="server" Font-Bold="True"
            Font-Size="X-Large" Height="49px" Text="Удалить" Width="15%" OnClick="btnDelete_Click"/>
        <br />
        <br />
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM [Store]"></asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>" SelectCommand="SELECT * FROM STORE"></asp:SqlDataSource>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="Id" DataSourceID="SqlDataSource1">
            <Columns>
                <asp:BoundField DataField="Id" HeaderText="Id" ReadOnly="True" SortExpression="Id" />
                <asp:BoundField DataField="Product" HeaderText="Product" SortExpression="Product" />
                <asp:BoundField DataField="Count" HeaderText="Count" SortExpression="Count" />
                <asp:BoundField DataField="Price" HeaderText="Price" SortExpression="Price" />
            </Columns>
        </asp:GridView>
    </form>
</body>
</html>
