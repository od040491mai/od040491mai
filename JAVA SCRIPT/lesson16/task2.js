/**
 * Created by user on 14.12.2015.
 */

//��� �������� label ������ �������. ������ ���� 3 ��������.
document.getElementById('age-table').getElementsByTagName('label');

//������ ������ ������� (�� ������ "�������").
document.getElementById('age-table').getElementsByTagName('td')[0];
document.querySelector('#age-table td');

//������ ����� � ���������.
document.getElementsByTagName('form')[1];

//����� � ������ search, ��� ������������� � ������� � ���������.
document.querySelector('form[name = "search"]');

//������� input � ����� � ������ search. ���� �� ���������, �� ����� ������.
document.querySelector('form[name = "search"] input');

//������� � ������ info[0], ��� ������� ������ ��� ������� � ���������
document.getElementsByName('info[0]')[0];

//������� � ������ info[0], ������ ����� � ������ search-person.
document.querySelector('form[name = "search-person"] [name = "info[0]"]');