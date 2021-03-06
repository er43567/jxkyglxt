package com.teacherms.system.dao.impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.teacherms.all.domain.Role;
import com.teacherms.all.domain.User;
import com.teacherms.system.dao.SystemDao;

public class SystemDaoImpl implements SystemDao {
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {
		return this.sessionFactory.getCurrentSession();
	}

	@Override
	public User getUserByUser_id(String user_id) {
		String hql = "from User where userId = '" + user_id + "'";
		return (User) getSession().createQuery(hql).uniqueResult();
	}

	@Override
	public Role getUserRoleByRoleId(String roleId) {
		String hql = "from Role where roleId ='" + roleId + "'";
		return (Role) getSession().createQuery(hql).uniqueResult();
	}

}
