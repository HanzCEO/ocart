export const idlFactory = ({ IDL }) => {
  const Art = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'image' : IDL.Text,
  });
  const DetectionAtom = IDL.Record({ 'art' : Art, 'confidence' : IDL.Nat32 });
  const DetectionReport = IDL.Record({
    'similarities' : IDL.Vec(DetectionAtom),
  });
  const Collection = IDL.Record({
    'arts' : IDL.Vec(Art),
    'name' : IDL.Text,
    'description' : IDL.Text,
  });
  const Artist = IDL.Record({
    'name' : IDL.Text,
    'collections' : IDL.Vec(Collection),
  });
  return IDL.Service({
    'get_detection_progress' : IDL.Func([IDL.Nat32], [IDL.Nat32], ['query']),
    'get_detection_result' : IDL.Func(
        [IDL.Nat32],
        [DetectionReport],
        ['query'],
      ),
    'get_inspiration_progress' : IDL.Func([IDL.Nat32], [IDL.Nat32], ['query']),
    'get_inspiration_result' : IDL.Func([IDL.Nat32], [IDL.Text], ['query']),
    'get_random_artists' : IDL.Func([IDL.Nat32], [IDL.Vec(Artist)], ['query']),
    'get_random_arts' : IDL.Func([IDL.Nat32], [IDL.Vec(Art)], ['query']),
    'get_random_collections' : IDL.Func(
        [IDL.Nat32],
        [IDL.Vec(Collection)],
        ['query'],
      ),
    'update_artist' : IDL.Func([IDL.Text], [IDL.Opt(Artist)], []),
    'update_detection_inference_session' : IDL.Func([], [IDL.Nat32], []),
    'update_detection_session_data' : IDL.Func(
        [IDL.Nat32, IDL.Text],
        [IDL.Bool],
        [],
      ),
    'update_inspiration_inference_session' : IDL.Func(
        [IDL.Text],
        [IDL.Nat32],
        [],
      ),
    'update_register_artist' : IDL.Func(
        [IDL.Opt(IDL.Text)],
        [IDL.Opt(Artist)],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
