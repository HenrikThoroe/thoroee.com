/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cv-entry".
 */
export interface CvEntry {
  id: string;
  location: string;
  date: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  roles: ('admin' | 'public')[];
  about?: string;
  profilePicture?:
    | '/flags/de.svg'
    | '/flags/no.svg'
    | '/logos/gym-ahz.png'
    | '/logos/kit.png'
    | '/logos/swc.png'
    | '/logos/knowit.png'
    | '/blueprint.svg'
    | '/profile.png'
    | '/rect.svg'
    | '/share-your-wifi-bg.svg'
    | '/wave-bottom.svg'
    | '/wave-top.svg';
  isAuthor?: boolean;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  name: string;
  'name-long': string;
  description: string;
  github: string;
  marketing?: string;
  dedicated?: boolean;
  priority?: number;
  layout: (
    | {
        title: string;
        interactions: {
          user: string;
          cmd: string;
          body: string;
          link?: string;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'console-layout';
      }
    | {
        title: string;
        body: string;
        store: string;
        source: string;
        id?: string;
        blockName?: string;
        blockType: 'card-layout';
      }
    | {
        title: string;
        tech: string;
        operator: string;
        result: string;
        source: string;
        id?: string;
        blockName?: string;
        blockType: 'browser-layout';
      }
    | {
        title: string;
        nodes: {
          content?: string;
          icon?: string;
          link?: string;
          'low-priority'?: boolean;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cluster-layout';
      }
  )[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reward-reference".
 */
export interface RewardReference {
  id: string;
  title: string;
  institution: string;
  date: string;
  link: string;
  media:
    | '/flags/de.svg'
    | '/flags/no.svg'
    | '/logos/gym-ahz.png'
    | '/logos/kit.png'
    | '/logos/swc.png'
    | '/logos/knowit.png'
    | '/blueprint.svg'
    | '/profile.png'
    | '/rect.svg'
    | '/share-your-wifi-bg.svg'
    | '/wave-bottom.svg'
    | '/wave-top.svg';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "education-reference".
 */
export interface EducationReference {
  id: string;
  institution: string;
  degree: string;
  start: string;
  end?: string;
  link: string;
  media:
    | '/flags/de.svg'
    | '/flags/no.svg'
    | '/logos/gym-ahz.png'
    | '/logos/kit.png'
    | '/logos/swc.png'
    | '/logos/knowit.png'
    | '/blueprint.svg'
    | '/profile.png'
    | '/rect.svg'
    | '/share-your-wifi-bg.svg'
    | '/wave-bottom.svg'
    | '/wave-top.svg';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "experience-reference".
 */
export interface ExperienceReference {
  id: string;
  institution: string;
  role: string;
  start: string;
  end?: string;
  link: string;
  media:
    | '/flags/de.svg'
    | '/flags/no.svg'
    | '/logos/gym-ahz.png'
    | '/logos/kit.png'
    | '/logos/swc.png'
    | '/logos/knowit.png'
    | '/blueprint.svg'
    | '/profile.png'
    | '/rect.svg'
    | '/share-your-wifi-bg.svg'
    | '/wave-bottom.svg'
    | '/wave-top.svg';
  location: string;
  country?: 'de' | 'no';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "skills".
 */
export interface Skill {
  id: string;
  category: string;
  caption: string;
  priority?: number;
  language: 'tsx' | 'cpp' | 'swift';
  code: (
    | {
        code: string;
        id?: string;
        blockName?: string;
        blockType: 'swift-code-layout';
      }
    | {
        code: string;
        id?: string;
        blockName?: string;
        blockType: 'cpp-code-layout';
      }
    | {
        code: string;
        id?: string;
        blockName?: string;
        blockType: 'tsx-code-layout';
      }
  )[];
  createdAt: string;
  updatedAt: string;
}
