�}ў
 � ����qD�qw
��	�:�GT�ֱ	f'��	�c�ؙ�&�,]���L<8Z��U�W��m����|�먨M\�xv��&�oׅ𗭡�Hi}��._A�j�1�
�c�X�ʹ�8ɡ�!RK�e�I	�"������s��o�$>���k�;���2�`�5E�f9vK�_��M>�ܫ�N�0�P��]샄����D�<�Ss�d)D�w��i�&�j���w����Jq��$��o���<��S�T���z�ݙ���D�!�mb����g?�m�`Hm��ܢ:Q��G*�yX�5L�	G��`4�'�๒��fV٭��
�ؕ�a+����;�A�."h�p	�����A�SR$3�n�!ʋi������=sh��y�h���Ԑ�!�ZR�>G�X���O͏!ኌ��E{��P(�ʰ?@�,C� G Q_(�i��f�ay����&&[����vKCƱ-pk:� �r+�!��::�)9�a�7@������9�>ow = $overflow;
		},
		onComplete:function(){
			$.colorbox.resize();
		}
	};

	$('.ace-thumbnails [data-rel="colorbox"]').colorbox(colorbox_params);
	$("#cboxLoadingGraphic").html("<i class='ace-icon fa fa-spinner orange fa-spin'></i>");//let's add a custom loading icon
	
	
	$(document).one('ajaxloadstart.page', function(e) {
		$('#colorbox, #cboxOverlay').remove();
   });
})