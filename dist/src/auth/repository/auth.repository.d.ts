import User from "src/entity/user.entity";
import { SignupUserDto } from "../dto/signup-user.dto";
import { LoginUserDto } from '../dto/login-user.dto';
import { EmailService } from 'src/twilio/email/email.service';
import { UpdatePasswordDto } from '../dto/update-password.dto';
import { EmailIntegrationDto } from '../dto/email-integration.dto';
import { CreateSubuserDto } from '../dto/create-subuser.dto';
import { UpdateSubuserDto } from '../dto/update-subuser.dto';
export declare const AuthRepository: import("typeorm").Repository<User> & {
    login(loginUserDto: LoginUserDto): Promise<any>;
    signup(signupUserDto: SignupUserDto): Promise<any>;
    updateFacebookFeature(userData: any, enabled: boolean): Promise<User>;
    updateHDFeature(userData: any, enabled: boolean): Promise<User>;
    updateEmailFeature(userData: any, enabled: boolean): Promise<User>;
    updateLivechatFeature(userData: any, enabled: boolean): Promise<User>;
    updateCallFeature(userData: any, enabled: boolean): Promise<User>;
    getProfile(userData: any): Promise<User>;
    integrateHD(userData: any, hdApiKey: string): Promise<void>;
    integrateEmail(userData: any, emailIntegrationDto: EmailIntegrationDto, emailService: EmailService): Promise<User>;
    getAdminUsers(): Promise<User[]>;
    updatePassword(userData: any, updatePasswordDto: UpdatePasswordDto): any;
    updateAvatar(userData: any, avatar: string): Promise<User>;
    buyPhoneNumber(userData: any, areaCode: string): Promise<any>;
    portPhoneNumber(userData: any, phoneNumber: string): Promise<any>;
    getLiveChatScript(userData: any): Promise<any>;
    getAnalytics(userData: any): Promise<any>;
    getIncomingMessagesForRange(userData: any, startDate: string, endDate: string, duration: string, agentId: number): Promise<{
        email: {};
        sms: {};
        calls: {};
        messenger: {};
        livechat: {};
    }>;
    createSubadmin(userData: any, createSubuserDto: CreateSubuserDto): Promise<User>;
    updateSLAEmail(userData: any, slaEmail: number): Promise<any>;
    updateSLAMessenger(userData: any, slaMessenger: number): Promise<any>;
    updateSLACall(userData: any, slaCall: number): Promise<any>;
    updateSLALivechat(userData: any, slaLivechat: number): Promise<any>;
    getSubadmins(userData: any): Promise<User[]>;
    getSubadminById(userData: any, id: number): Promise<User>;
    updateSubadmin(userData: any, updateSubuserDto: UpdateSubuserDto): Promise<User>;
    deleteSubadminById(userData: any, id: number): Promise<any>;
};