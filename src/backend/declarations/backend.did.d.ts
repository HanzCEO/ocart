import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Art {
  'name' : string,
  'description' : string,
  'image' : string,
}
export interface Artist { 'name' : string, 'collections' : Array<Collection> }
export interface Collection {
  'arts' : Array<Art>,
  'name' : string,
  'description' : string,
}
export interface DetectionAtom { 'art' : Art, 'confidence' : number }
export interface DetectionReport { 'similarities' : Array<DetectionAtom> }
export interface _SERVICE {
  'get_detection_progress' : ActorMethod<[number], number>,
  'get_detection_result' : ActorMethod<[number], DetectionReport>,
  'get_inspiration_progress' : ActorMethod<[number], number>,
  'get_inspiration_result' : ActorMethod<[number], string>,
  'get_random_artists' : ActorMethod<[number], Array<Artist>>,
  'get_random_arts' : ActorMethod<[number], Array<Art>>,
  'get_random_collections' : ActorMethod<[number], Array<Collection>>,
  'update_artist' : ActorMethod<[string], [] | [Artist]>,
  'update_detection_inference_session' : ActorMethod<[], number>,
  'update_detection_session_data' : ActorMethod<[number, string], boolean>,
  'update_inspiration_inference_session' : ActorMethod<[string], number>,
  'update_register_artist' : ActorMethod<[[] | [string]], [] | [Artist]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
