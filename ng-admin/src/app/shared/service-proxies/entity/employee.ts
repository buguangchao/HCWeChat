export class Employee implements IEmployee {
    code: string;
    name: string;
    position: number;
    positionName: string;
    phone: string;
    company: string;
    department: string;
    isAction: boolean;
    tenantId: number;
    isDeleted: boolean;
    deleterUserId: number;
    deletionTime: Date;
    lastModificationTime: Date;
    lastModifierUserId: number;
    creationTime: Date;
    creatorUserId: number;
    id: string;
    activeType: string;
    activeText: string;
    constructor(data?: IEmployee) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.code = data["code"];
            this.name = data["name"];
            this.position = data["position"];
            this.phone = data["phone"];
            this.company = data["company"];
            this.department = data["department"];
            this.isAction = data["isAction"];
            this.isDeleted = data["isDeleted"];
            this.deleterUserId = data["deleterUserId"];
            this.deletionTime = data["deletionTime"];
            this.tenantId = data["tenantId"];
            this.creationTime = data["creationTime"];
            this.creatorUserId = data["creatorUserId"];
            this.lastModificationTime = data["lastModificationTime"];
            this.lastModifierUserId = data["lastModifierUserId"];
        }
    }

    static fromJS(data: any): Employee {
        let result = new Employee();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        this.id = data["id"];
        this.code = data["code"];
        this.name = data["name"];
        this.position = data["position"];
        this.phone = data["phone"];
        this.company = data["company"];
        this.department = data["department"];
        this.isAction = data["isAction"];
        data["id"] = this.id;
        data["code"] = this.code;
        data["name"] = this.name;
        data["position"] = this.position;
        data["phone"] = this.phone;
        data["company"] = this.company;
        data["department"] = this.department;
        data["isAction"] = this.isAction;
        return data;
    }

    clone() {
        const json = this.toJSON();
        let result = new Employee();
        result.init(json);
        return result;
    }
}
export interface IEmployee {
    code: string;
    name: string;
    position: number;
    phone: string;
    company: string;
    department: string;
    isAction: boolean;
    tenantId: number;
    isDeleted: boolean;
    deleterUserId: number;
    deletionTime: Date;
    lastModificationTime: Date;
    lastModifierUserId: number;
    creationTime: Date;
    creatorUserId: number;
    id: string;
}