(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{X3zk:function(o,t,e){"use strict";e.r(t),e.d(t,"routes",(function(){return q})),e.d(t,"LoginModule",(function(){return x}));var r=e("ofXK"),s=e("tyNb"),n=e("3Pt+"),i=e("SxV6"),a=e("oLpL"),c=e("fXoL"),l=e("XNvx"),u=e("tk/3"),m=e("dNgK"),b=e("XhcP"),f=e("u+JC"),d=e("bTqV"),g=e("kmnG"),p=e("NFeN"),h=e("qFsG");let w=(()=>{class o{constructor(){this.show=!1}get type(){return this.show?"text":"password"}get icon(){return this.show?"visibility_off":"visibility"}onClick(){this.show=!this.show}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=c.Ib({type:o,selectors:[["button","appPasswordToggle",""]],hostBindings:function(o,t){1&o&&c.ac("click",(function(){return t.onClick()}))},exportAs:["appPasswordToggle"]}),o})();var S=e("Qu3c");function v(o,t){1&o&&(c.Tb(0,"mat-error"),c.zc(1,"Email is required"),c.Sb())}function T(o,t){1&o&&(c.Tb(0,"mat-error"),c.zc(1,"Invalid email address"),c.Sb())}function y(o,t){1&o&&(c.Tb(0,"mat-error"),c.zc(1,"Password is required"),c.Sb())}function k(o,t){1&o&&(c.Tb(0,"mat-error"),c.zc(1,"Password isn't long enough, minimum of 6 characters"),c.Sb())}let B=(()=>{class o{constructor(o,t,e,r,s){this.fb=o,this.router=t,this.loginService=e,this.httpClient=r,this.snackBar=s,this.form=this.fb.group({email:[null,n.q.compose([n.q.required,a.a])],password:[null,n.q.compose([n.q.required,n.q.minLength(6)])]})}ngOnInit(){this.httpClient.get("assets/users.json").subscribe(o=>{console.log(o),this.users=o})}onSubmit(){console.log(this.form.value),this.loginService.login(this.form.value).pipe(Object(i.a)()).subscribe(o=>{this.router.navigate(["/homepage"]),this.loginService.getSession().subscribe(o=>{console.log(o),console.log(o.session.user_id),localStorage.setItem("user",o.session.user_id)})},o=>{console.log(o),this.message="Enter Email as n@gmail.com & Password as admin123",confirm("Looks like you don't connected with database, Do you want to continue with static data. Only for demo ")&&this.loginWithoutBackend()})}forgotPassword(){this.snackBar.open("Not Implemeted")}loginWithoutBackend(){for(let o=0;o<this.users.length;o++)this.form.controls.email.value==this.users[o].email&&this.form.controls.password.value==this.users[o].password?(console.log("Login Success"),this.snackBar.open("Login Successful"),this.router.navigate(["/homepage"]),localStorage.setItem("user",this.users[o].user_id)):this.snackBar.open("Login Failed")}}return o.\u0275fac=function(t){return new(t||o)(c.Nb(n.d),c.Nb(s.b),c.Nb(l.a),c.Nb(u.a),c.Nb(m.b))},o.\u0275cmp=c.Hb({type:o,selectors:[["app-login"]],decls:29,vars:12,consts:[[1,"h-100"],["fxLayout","row","fxLayoutAlign","center center",1,"h-100","container"],["fxFlex","90","fxFlex.gt-sm","30","fxFlex.sm","60",1,"mat-elevation-z6",2,"background-color","#f3f3f3",3,"formGroup"],[3,"icon","title","hasBgImage"],[1,"p-3"],["mat-button","","routerLink","/register","color","accent",1,"w-100"],[1,"w-100"],["matPrefix","",1,"mat-icon-sm","mb-2","mr-2"],["matInput","","placeholder","Email","formControlName","email","required",""],[4,"ngIf"],["matInput","","placeholder","Password","formControlName","password","required","",3,"type"],["matTooltip","View Password","mat-icon-button","","matSuffix","","appPasswordToggle",""],["pwToggle","appPasswordToggle"],["mat-raised-button","","color","primary","type","submit",1,"mat-elevation-z6","w-100","mt-3",3,"click"],["mat-button","","color","accent",1,"w-100",3,"click"]],template:function(o,t){if(1&o&&(c.Tb(0,"h4"),c.zc(1),c.Sb(),c.Tb(2,"mat-sidenav-container",0),c.Tb(3,"div",1),c.Tb(4,"form",2),c.Ob(5,"app-content-header",3),c.Tb(6,"div",4),c.Tb(7,"a",5),c.zc(8,"Don't have an account? Sign up now!"),c.Sb(),c.Tb(9,"mat-form-field",6),c.Tb(10,"mat-icon",7),c.zc(11,"email"),c.Sb(),c.Ob(12,"input",8),c.yc(13,v,2,0,"mat-error",9),c.yc(14,T,2,0,"mat-error",9),c.Sb(),c.Tb(15,"mat-form-field",6),c.Tb(16,"mat-icon",7),c.zc(17,"lock"),c.Sb(),c.Ob(18,"input",10),c.Tb(19,"button",11,12),c.Tb(21,"mat-icon",7),c.zc(22,"remove_red_eye"),c.Sb(),c.Sb(),c.yc(23,y,2,0,"mat-error",9),c.yc(24,k,2,0,"mat-error",9),c.Sb(),c.Tb(25,"button",13),c.ac("click",(function(){return t.onSubmit()})),c.zc(26,"SIGN IN"),c.Sb(),c.Sb(),c.Tb(27,"a",14),c.ac("click",(function(){return t.forgotPassword()})),c.zc(28,"Forgot Password?"),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&o){const o=c.oc(20);c.Bb(1),c.Ac(t.message),c.Bb(3),c.jc("formGroup",t.form),c.Bb(1),c.Db("card-spacing"),c.jc("icon","exit_to_app")("title","Login")("hasBgImage",!0),c.Bb(8),c.jc("ngIf",null==t.form.controls.email.errors?null:t.form.controls.email.errors.required),c.Bb(1),c.jc("ngIf",t.form.controls.email.hasError("invalidEmail")),c.Bb(4),c.jc("type",o.type),c.Bb(5),c.jc("ngIf",null==t.form.controls.password.errors?null:t.form.controls.password.errors.required),c.Bb(1),c.jc("ngIf",t.form.controls.password.hasError("minlength"))}},directives:[b.a,n.r,n.m,n.f,f.a,d.a,s.c,g.c,p.a,g.f,h.b,n.c,n.l,n.e,n.p,r.l,d.b,w,S.a,g.g,g.b],styles:[""]}),o})();var I=e("bgEw");const q=[{path:"",component:B,pathMatch:"full"}];let x=(()=>{class o{}return o.\u0275mod=c.Lb({type:o}),o.\u0275inj=c.Kb({factory:function(t){return new(t||o)},imports:[[r.c,s.d.forChild(q),n.g,n.o,I.a]]}),o})()}}]);