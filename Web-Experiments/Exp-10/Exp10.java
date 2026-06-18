public class exp10 {

    public static void main(String[] args) {

        SavingsAccount sa = new SavingsAccount(101, "Rahul");
        sa.deposit(12000);

        System.out.println("Account Number: " + sa.getAccountNumber());
        System.out.println("Account Holder Name: " + sa.getAccountHolderName());
        System.out.println("Balance: " + sa.getBalance());
        System.out.println("Savings Account Interest: " + sa.calculateInterest());

        System.out.println();

        CurrentAccount ca = new CurrentAccount(102, "Anita");
        ca.deposit(22000);

        System.out.println("Account Number: " + ca.getAccountNumber());
        System.out.println("Account Holder Name: " + ca.getAccountHolderName());
        System.out.println("Balance: " + ca.getBalance());
        System.out.println("Current Account Interest: " + ca.calculateInterest());
    }
}
