/**
 * Created by ������ on 01.11.2015.
 */
var ladder = {
    step: 0,
    up: function() { // ����� �� ��������
        this.step++;
        return this;
    },
    down: function() { // ���� �� ��������
        this.step--;
        return this;
    },
    showStep: function() { // ������� ������� ���������
        console.log( this.step );
        return this;
    }
};
