import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator"
import { Request } from "express";
import { Stream } from "stream"

export namespace Types {
  export interface IReq extends Request {
    user: User.Output
  }
  export class Image {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    image: string
  }
  export interface Comment {
    id?: number
    comment: string
  }
  export class FileModuleOutput {
    @ApiProperty()
    id: number

    @ApiProperty()
    name: string
  }
  export interface Contact extends IdNameImg {
    nickname?: string
    phones?: string[]
    tags?: Tag[]
    comments?: Comment[]
  }
  
  export enum FileType {
    audio = 'AUDIO',
    video = 'VIDEO',
    img = 'IMG',
    doc = 'DOC'
  }
  export class File {
    @ApiProperty()
    id?: number

    @ApiProperty()
    type?: FileType
    
    @ApiProperty()
    name: string
    
    @ApiProperty()
    url?: string
    
    @ApiProperty()
    size?: number
    
    @ApiProperty()
    sortOrder?: number
    
    @ApiProperty()
    data?: Stream | string
    
    @ApiProperty()
    hash?: string
  }

  export class Login {
    @ApiProperty()
    @IsNumber()
    orgId: number
  }
  export class Phone {
    @ApiProperty()
    @IsString()
    phone: string
  }
  export namespace Sms {
    export class Output {
      @ApiProperty()
      smsId: number
    }
    export class Input {
      @ApiProperty()
      @IsString()
      code: string

      @ApiProperty()
      @IsNumber()
      smsId: number
    }
  }

  export interface Tag {
    id?: number
    tag: string
  }
  export namespace Ticket {
    export interface Template {
      id?: number
      name?: string
      sortOrder?: number
      orgId?: number
      text: string
      files?: File[]
    }
    export enum Status {
      new = 'NEW',
      active = 'ACTIVE',
      closed = 'CLOSED'
    }
    export enum Author {
      contact = 'contact',
      user = 'user_org'
    }
    const author: Author = Author.contact
    export enum Role {
      author = 'AUTHOR',
      actor = 'ACTOR',
      participant = 'PARTICIPANT'
    }
    export interface Message {
      id?: number
      author?: Author
      incoming?: boolean
      createDate?: Date
      delivered?: boolean
      read?: boolean
      replyTo?: Message
      text?: string
      files?: File[]
      isDraft?: boolean
      contacts?: Contact[]
      geo?: {
        latitude: string
        longitude: string
        speed?: string
        accuracy?: string
        altitude?: string
        altitudeAccuracy?: string
        heading?: string
      }
      call?: {
        answered: boolean
      }
    }
    export class Ticket {
      id: number
      contact: Contact
      newMessagesCount: number
      status: Status
      lastMessage: Message
      participants?: Array<
        IdNameImg & { role: Role }
      >
      tags?: Tag[]
      comments?: Comment[]
      remindTime?: Date
    }
  }
  export namespace Org {
    export class Input {
      @ApiProperty()
      @IsString()
      name: string

      @ApiProperty()
      @IsOptional()
      @Type(() => Image)
      image?: Image
    }
    export interface Output extends Omit<Input, 'image'> {
      id: number
      image: string | null
    }
  }
  export namespace User {
    export class Output {
      constructor(
        public id: number,
        public name: string,
        public active: boolean,
        public phone: string,
        public image: string | null,
        public orgs?: User.Org[] | null,
        public invites?: User.Org[] | null,
        public token?: string | null
      ) { }
    }

    export class Input {
      @IsString()
      name: string

      @IsOptional()
      @Type(() => Image)
      image?: Image
    }

    /* Fields are optional because if it's invite 
        and while user hasn't accepted it 
        there's no values for them 
    */
    export interface Org extends Org.Output {
      userOrgId?: number
      role?: string
    }

    export enum OrgRole {
      owner = 'OWNER',
      employee = 'EMPLOYEE'
    }
  }

  export interface IdNameImg {
    id?: number
    name?: string
    imageUrl?: string
    image?: File
  }
  export interface UserAuthResult {
    data?: IdNameImg & {
      phone: string
      active: boolean
      /* If we found any org user belongs to with any role */
      org?: Array<
        IdNameImg & {
          role: User.OrgRole
          active?: boolean
          inviteAccepted?: boolean
          isCurrent: boolean
        }
      >

      /** Create session immediately if there's user with phone 
       * Token encrypts userId and maybe some more user/org attributes
       */
      token?: string
    }
  }

};
export const temp: Types.UserAuthResult = {}