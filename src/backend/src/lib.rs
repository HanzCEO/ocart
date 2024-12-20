mod types;

use std::collections::HashMap;
use types::*;

thread_local! {
	pub static STATE: std::cell::RefCell<State> = std::cell::RefCell::default();
}

///////////////////////////////////////////////////////////////////

#[ic_cdk::init]
fn init() {
	STATE.with(|state| {
		*state.borrow_mut() = State {
			artists: HashMap::new(),
			collections: HashMap::new(),
			arts: HashMap::new()
		};
	});
}

#[ic_cdk::pre_upgrade]
fn pre_upgrade() {
	STATE.with(|state| {
		let state = state.borrow();
		ic_cdk::storage::stable_save((
			state.clone(),
		)).expect("Failed to save states");
	});
}

#[ic_cdk::post_upgrade]
fn post_upgrade() {
	let (state,): (State,) = ic_cdk::storage::stable_restore().expect("Failed to restore state");
	STATE.with(|s| {
		*s.borrow_mut() = state;
	});
}

///////////////////////////////////////////////////////////////////

#[ic_cdk::query]
fn get_random_artists(amount: u32) -> Vec<Artist> {
	return vec![];
}

#[ic_cdk::query]
fn get_random_collections(amount: u32) -> Vec<Collection> {
	return vec![];
}

#[ic_cdk::query]
fn get_random_arts(amount: u32) -> Vec<Art> {
	return vec![];
}

///////////////////////////////////////////////////////////////////

#[ic_cdk::update]
fn update_inspiration_inference_session(prompt: String) -> u32 { 0 }

#[ic_cdk::query]
fn get_inspiration_progress(session_id: u32) -> u32 { 0 }

#[ic_cdk::query]
fn get_inspiration_result(session_id: u32) -> String { "".to_string() }

///////////////////////////////////////////////////////////////////

#[ic_cdk::update]
fn update_detection_inference_session() -> u32 { 0 }

#[ic_cdk::update]
fn update_detection_session_data(id: u32, data: String) -> bool { false }

#[ic_cdk::query]
fn get_detection_progress(id: u32) -> u32 { 0 }

#[ic_cdk::query]
fn get_detection_result(id: u32) -> DetectionReport {
	DetectionReport { similarities: vec![] }
}

///////////////////////////////////////////////////////////////////

ic_cdk::export_candid!();
