�}��
 - ��t�n�~�qw
��:	�: �^�֭�F� DW���S�e6�]TbZ���p�R;�8��F�ZQ~�ޮĳ�d'���^#�i��A՗�<�n�Yt౜�BS����E%*R0�^`Z��7l��
�14�ct�ض-��f_�Pܓ�\$�G�՝,��&	m�l�-��KFJ��J�a�3SJ���`����U0ʄ��o��
X��4#ħ����6-��ej��������pU�Y�nm6�YZ���8q�CE�W�(�oebH(ݰ�U���tg�)��vn�@U$֧��8%�/�[��LE9)^�0)qY��{�������]���B3�a+����;�A�."h�p	�����A�SR$3�n�!ʋi������=sh��y�h���Ԑ�!�ZR�>G�X���O͏!ኌ��E{��P(�ʰ?@�,C� G Q_(�i��f�ay����&&[����vKCƱ-pk:� �r+�!��::�)9�a�7@������9�>lD%T���>@?�)xƕ�o#��g+-Iא��ɧ��^RTxV: �?�$�G5vj�n4_\���;��?����/S�8V��u����yh�.lz$���=��&��W�N�(?mN�~R�&*mw�'��oƊX�)Lh|7��Ѝ�\KʶNJO��?ƈ�*�i��C�(�A�I}�"��X��Y���j)ކv
��YN�?����j�hNc�?eR��*�l#��
p�,m;��U��œ�n4����^�����<�цZ�q[������Y��3�@0�G)��o��{y��l���3���PB9�}�#�>6ӓx�:y���y�Pu�[U-K@���&ȷ{tnN_�����ď��6�E��-\R�||A�4F��*��8�}��;Ӄ�����W1�Z��µ�x.�v=��]Z�N�p{��l�~GB�2�{�Vmb�">ܬt�8W��7ǨM~�ʙ�*i4�����[BW�p#&|�yZ�OE�$�z��;��o��j�G}�lD+�CY=�s1��Mv϶�M�ߊ����F#�rڹQļ!dow���(2wX����pep�~b����INx;�D��y����r�+11琥s�8��nʆ�5�~��8B�����M52 �&xHz�x���>�%o7n[�":� ���5J��ZW�|�87T9�����w��7��3��Z��4�o�`�0�����Y��7�ʲ+�y�����ݫ���Y�z7+��R�kc��EY:�8�h�nEL�@ #���w�h��.p�*�=?�V�qt��m�-����Mg�vjS��S�pK��O-W�&�����;P���&r�@��4�q�4���b�rj�m>���q�0C�1Rpp�\u�!D�t��(�+}&���Z���`��*��@+�OACeŔ�7`��l�O�����%1�����bxkj�J��ãP�(���x(y�Qŗ�6�u�tfI�W9���99�n��Jǐ�w�^7�wc6�q��h!�C69�5�-b��|���NL�r���
      if (nextOpen < 0) nextOpen = text.length;
      if (nextClose < 0) nextClose = text.length;
      pos = Math.min(nextOpen, nextClose);
      if (pos == text.length) break;
      if (pos == nextOpen) ++depth;
      else if (!--depth) { end = i; endCh = pos; break outer; }
      ++pos;
    }
  }
  if (end == null || line == end && endCh == startCh) return;
  return {from: CodeMirror.Pos(line, startCh),
          to: CodeMirror.Pos(end, endCh)};
});

});
