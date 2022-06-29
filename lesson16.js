"Use strict";

 const account = {
	personalData:[
		{name:"Armen"},
		{surname:"Shadoyan"},
		{age:20},
		{telNumber:"xx-yy-xxx"},
		{private:true}
	],
	showMyDB(private){
		if(private == false){
			account.personalData[4].private == false
				return account.personalData;
		}else{
				return "THIS ACCOUNT IS PRIVATE";
		}
		yourFavoriteGenres(){
			for(let i = 0;i => 0;i++){
		    let  a=prompt("1.  Ձեր նախընտրելի ժանրը")
			let  b=prompt("2.  Ձեր նախընտրելի ժանրը")
			let  c=prompt("3.  Ձեր նախընտրելի ժանրը")

				if(a != "" && a != null && a.length < 20 && b != ""
				 && b != null && b.length < 20 && c != "" && c != null && c.length < 20){
					break
				}
			}
	}
  }
};
console.log(account.showMyDB(false));//personalData .....
account.yourFavoriteGenres();
//________________________________________________


