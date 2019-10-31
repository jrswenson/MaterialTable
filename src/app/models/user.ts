import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

export class User {
    formGroup: FormGroup;

    private origCreateDate: Date;
    private origActive: boolean;
    private origId: number;
    private origName: string;
    private origUsername: string;

    createDateCtrl: AbstractControl;
    activeCtrl: AbstractControl;
    idCtrl: AbstractControl;
    nameCtrl: AbstractControl;
    userNameCtrl: AbstractControl;

    constructor(private ctorUser: User) {
        if (ctorUser) {
            this.origCreateDate = ctorUser.createDate;
            this.origActive = ctorUser.active ? ctorUser.active === true ? true : false : false;
            this.origId = ctorUser.id;
            this.origName = ctorUser.name;
            this.origUsername = ctorUser.username;
        }

        this.formGroup = new FormGroup(
            {
                createDate: new FormControl(this.origCreateDate, Validators.required),
                active: new FormControl(this.origActive, Validators.required),
                id: new FormControl(this.origId, Validators.required),
                name: new FormControl(this.origName, Validators.required),
                username: new FormControl(this.origUsername, Validators.required),
            }
        );

        this.createDateCtrl = this.formGroup.get('createDate');
        this.activeCtrl = this.formGroup.get('active');
        this.idCtrl = this.formGroup.get('id');
        this.nameCtrl = this.formGroup.get('name');
        this.userNameCtrl = this.formGroup.get('username');

        this.formGroup.valueChanges.subscribe
            (
                (val) => {
                    console.log('this.formGroup.valueChanges.subscribe: next');
                    console.log(val);
                }
                , (err) => {
                    console.log('this.formGroup.valueChanges.subscribe: error');
                    console.log(err);
                }
                , () => {
                    console.log('this.formGroup.valueChanges.subscribe: complete');
                }
            );
    }

    get createDate(): Date {
        return this.createDateCtrl.value;
    }
    set createDate(value: Date) {
        // tslint:disable-next-line: curly
        if (this.origCreateDate === undefined)
            this.origCreateDate = value;

        this.createDateCtrl.setValue(value);
    }

    get active(): boolean {
        return this.activeCtrl.value;
    }
    set active(value: boolean) {
        // tslint:disable-next-line: curly
        if (this.origActive === undefined)
            this.origActive = value;

        this.activeCtrl.setValue(value);
    }

    get id(): number {
        return this.idCtrl.value;
    }
    set id(value: number) {
        // tslint:disable-next-line: curly
        if (this.origId === undefined)
            this.origId = value;

        this.idCtrl.setValue(value);
    }

    get name(): string {
        return this.nameCtrl.value;
    }
    set name(value: string) {
        // tslint:disable-next-line: curly
        if (this.origName === undefined)
            this.origName = value;

        this.nameCtrl.setValue(value);
    }

    get username(): string {
        return this.userNameCtrl.value;
    }
    set username(value: string) {
        // tslint:disable-next-line: curly
        if (this.origUsername === undefined)
            this.origUsername = value;

        this.userNameCtrl.setValue(value);
    }
}
