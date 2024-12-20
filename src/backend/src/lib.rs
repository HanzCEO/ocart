use candid::{CandidType, Deserialize};

#[derive(CandidType, Deserialize)]
struct Art {
	name: String,
	description: String,
	image: String
}

#[derive(CandidType, Deserialize)]
struct Collection {
	name: String,
	description: String,
	arts: Vec<Art>
}

#[derive(CandidType, Deserialize)]
struct Artist {
	name: String,
	collections: Vec<Collection>
}

#[derive(CandidType, Deserialize)]
struct DetectionAtom {
	art: Art,
	confidence: u32
}

#[derive(CandidType, Deserialize)]
struct DetectionReport {
	similarities: Vec<DetectionAtom>
}

///////////////////////////////////////////////////////////////////

#[ic_cdk::query]
fn get_random_artists(amount: u32) -> Vec<Artist> {}

#[ic_cdk::query]
fn get_random_collections(amount: u32) -> Vec<Collection> {}

#[ic_cdk::query]
fn get_random_arts(amount: u32) -> Vec<Art> {}

///////////////////////////////////////////////////////////////////

#[ic_cdk::update]
fn update_inspiration_inference_session(prompt: String) -> u32 {}

#[ic_cdk::query]
fn get_inspiration_progress(session_id: u32) -> u32 {}

#[ic_cdk::query]
fn get_inspiration_result(session_id: u32) -> String {}

///////////////////////////////////////////////////////////////////

#[ic_cdk::update]
fn update_detection_inference_session() -> u32 {}

#[ic_cdk::update]
fn update_detection_session_data(id: u32, data: String) -> bool {}

#[ic_cdk::query]
fn get_detection_progress(id: u32) -> u32 {}

#[ic_cdk::query]
fn get_detection_result(id: u32) -> DetectionReport {}
