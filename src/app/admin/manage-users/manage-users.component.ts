// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-manage-users',
//   templateUrl: './manage-users.component.html',
//   styleUrls: ['./manage-users.component.css']
// })


// export class ManageUsersComponent implements OnInit {
//   userList: User[] = [];
//   selectedUser: User = new User();
//   editUser: User = new User();

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.userService.getUsers().subscribe((data: User[]) => {
//       this.userList = data;
//     });
//   }

//   onEdit(user: User) {
//     this.editUser = user;
//     this.selectedUser = user;
//   }

//   onUpdate() {
//     this.userService.updateUser(this.selectedUser).subscribe(() => {
//       this.ngOnInit();
//     });
//   }

//   onDelete(user: User) {
//     this.userService.deleteUser(user.id).subscribe(() => {
//       this.ngOnInit();
//     });
//   }
// }

