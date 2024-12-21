use sha2::{Digest, Sha256};
use rand::{Rng, SeedableRng};
use rand::rngs::SmallRng;
use rand::RngCore;

pub fn rng_with_seed(seed: u32) -> SmallRng {
	SmallRng::seed_from_u64(seed as u64)
}
