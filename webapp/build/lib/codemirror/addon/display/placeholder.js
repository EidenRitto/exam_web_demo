�}M�
 1 ��x��TÃqw
��2	�: G�	�ֱ�F:��V%����A?M�Y��n�Z��
N(/����X�r)9��� ���7�����j/sA�>���	;����	ԖS�����
hV^�,m���GQ���ʃZ-��"	�/�5�7o*(ㄚ�4P�Y�~}�m��ڙ�}9%�^ ��
'Һo�Q�)���0X��*V���I���j�8LۖZ�����X��bK �ې��(cy��$�~4�~�p��g�ɴ^M)��WZ�jJS� ;���D�\�
�c˴H� ?�M`nѡ��?z_���
e��]c��>a���(;��/�/!�h#}I��
�ؕ�a+����;�A�."h�p	�����A�SR$3�n�!ʋi������=sh��y�h���Ԑ�!�ZR�>G�X���O͏!ኌ��E{��P(�ʰ?@�,C� G Q_(�i��f�ay����&&[����vKCƱ-pk:� �r+�!��::�)9�a�7@������9�>l�"@D���d��D�������'��ؕ�pѓt�;���?���oWj`�KaGO�0�5�4^�NN[D���A���N���k�Z��^?�
+[(Z����e����Ce�;� �훯l�^dȗ�,�\��38�u-@�,�\�_аɼ���� IP��zQ��ȹG��)��?�٬qH끜	R
���!�5��Khr�U��wUd���D�3G�f +�S���0E�����.�*�*�(�4.\���
�s�(��g�J�W��Ea$���j���ېlhk	�o��@Ⱦl��}gw�hG�b�N�RC��.m�:�e!	pX|rJk���44����#1,9�H6�n2ڛ��f�%�Q䠓�Y�^wy?ߵ#�d��\�0�`><�p9���	?;���k_M�U	�'�$��]op̔� �r�<���a�,��q�B�0��oad��U�1^��x������3������D;wR�����H���5�`M��vlD#�XE��U����[vp���7U��f�"�1/�)!M���o���z��-�>��� h��`^>X�P��S�u���-����2�ɑ1u�zf(.ȾI���M�ꦜl�d�c��K��co�4�n���R=Ӳ�7�yɩ��Q|%5��hd����'�M�(φ�Y�����@-�u�5vtm��f���~Њa�@@$V:�]jEZEz�	#�V�!����n�+[���ܧ�2�t`�8xά%_�sud��Ⱦk:x3e!��HTA߹֥QW�:\�#�݁-���, �� ���Ɵ%0�����-"[tg���#>���`����������ͥA8����xҗ�0���XAcR���hTovN`���B)���_}�i:"���P�>������6���Qv^�Ѽ��ܜ���s�G����"�|P�έ=S:m�}{Q�Q����A�[RA�}�p����o�i��rW�9��<function onBlur(cm) {
    if (isEmpty(cm)) setPlaceholder(cm);
  }
  function onChange(cm) {
    var wrapper = cm.getWrapperElement(), empty = isEmpty(cm);
    wrapper.className = wrapper.className.replace(" CodeMirror-empty", "") + (empty ? " CodeMirror-empty" : "");

    if (empty) setPlaceholder(cm);
    else clearPlaceholder(cm);
  }

  function isEmpty(cm) {
    return (cm.lineCount() === 1) && (cm.getLine(0) === "");
  }
});
