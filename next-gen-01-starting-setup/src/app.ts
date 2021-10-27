class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string){
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {

    this.employees.push(employee);
  }

  printEmployeeInformtion() {
    console.log(this.employees.length)
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment('34', ['zannder'])

it.addEmployee('Zander')
it.addEmployee('Lex')

// it.employees[2] = 'Mercy'

it.describe();
it.printEmployeeInformtion();
console.log(it)

const accounting = new AccountingDepartment('d1', []);
accounting.addReport('Something went wrog');
accounting.printReports()
// const accountingCopy = { name: 's', describe: accounting.describe };
// accountingCopy.describe();