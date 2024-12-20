mod types;

use types::*;
use candid::Principal;

use crate::STATE;


pub fn create_artist() -> Artist {}

pub fn check_artist_existence_by_principal(id: Principal) -> bool {
	STATE
}
