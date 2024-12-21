use crate::types::*;
use candid::Principal;

use crate::STATE;


pub fn create_artist() -> Option<Artist> {
	let caller = ic_cdk::caller();
	if !check_artist_existence_by_principal(caller) {
		let new_artist: Artist = Artist {
			name: caller.to_text(),
			collections: vec![]
		};
		Some(new_artist)
	} else {
		None
	}
}

pub fn update_artist(name: String) -> Option<Artist> {
	let caller = ic_cdk::caller();
	if check_artist_existence_by_principal(caller) {
		STATE.with(|s| {
			let mut state = s.borrow_mut();
			if let Some(profile) = state.artists.get_mut(&caller) {
				profile.name = name;
				Some(profile.clone())
			} else {
				None
			}
		})
	} else {
		None
	}
}

pub fn check_artist_existence_by_principal(id: Principal) -> bool {
	STATE.with(|state| state.borrow().artists.contains_key(&id))
}
