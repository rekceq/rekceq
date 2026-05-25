---
title: test
draft: false
tags:
  - "#tag"
---
Some text.



		
		var _got_hit = false;
		var _list = ds_list_create();
		var _num = collision_circle_list(x, y, TILESIZE/2, obj_person, false, true, _list, false);
		if (_num > 0){
		    for (var i = 0; i < _num; ++i){
				var _person = _list[| i];
				if _person.stun <= 0{
					if y < _person.y - 2{
						with _person{
							spd_v = jmp;
							spd_h = random_range(-16, 16);
							stun  = 300;
							state = state_stun
							if purse > 0{
								with instance_create_layer(x, y, "instances", obj_coin){
									can_pick = 30;
									spd_v = random_range(-4, -6);
									spd_h = -_person.spd_h;
								}
								purse--;
							}
						}
						spd_v = -jmp / (1 + !input_jumph);
					}
					else{
						if is_player{
							spd_h = 32 * sign(x - _person.x);
							stun = 300;
							target_spd_h = 0;
						}
						exit;
					}
				}
		    }
		}
		ds_list_destroy(_list);