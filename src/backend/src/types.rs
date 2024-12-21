use candid::{CandidType, Principal};
use serde::{Serialize, Deserialize};
use std::collections::HashMap;

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct Art {
	pub name: String,
	pub description: String,
	pub image: String
}

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct Collection {
	pub name: String,
	pub description: String,
	pub arts: Vec<Art>
}

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct Artist {
	pub name: String,
	pub collections: Vec<Collection>
}

#[derive(CandidType, Deserialize)]
pub struct DetectionAtom {
	pub art: Art,
	pub confidence: u32
}

#[derive(CandidType, Deserialize)]
pub struct DetectionReport {
	pub similarities: Vec<DetectionAtom>
}

#[derive(Default)]
#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct State {
	pub artists: HashMap<Principal, Artist>,
	pub collections: HashMap<u32, Collection>,
	pub arts: HashMap<u32, Art>
}
