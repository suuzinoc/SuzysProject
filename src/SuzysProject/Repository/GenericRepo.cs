﻿using Microsoft.EntityFrameworkCore;
using SuzysProject.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuzysProject.Repository
{
    public class GenericRepo : IGenericRepo
    {
        private ApplicationDbContext _db;

        public GenericRepo(ApplicationDbContext db)
        {
            _db = db;
        }
        //Generic query method. return a query 
        public IQueryable<T> Query<T>() where T : class
        {
            return _db.Set<T>().AsQueryable();//look for a db set of some object example journal
        }
        //add a new enitiy to a dbSet of that entity
        public void Add<T>(T entityToCreate) where T : class
        {
            _db.Set<T>().Add(entityToCreate);
            _db.SaveChanges();
        }
        //genetically update an existing entity
        public void Update<T>(T entityToUpdate) where T : class
        {
            _db.Set<T>().Update(entityToUpdate);
            _db.SaveChanges();
        }//Generic delete existing entity
        public void Delete<T>(T entityToDelete) where T : class
        {
            _db.Set<T>().Remove(entityToDelete);
            _db.SaveChanges();
        }
    }
}

            ///// <summary>
            ///// Generic query method
            ///// </summary>
            //public IQueryable<T> Query<T>() where T : class
            //{
            //    return _db.Set<T>().AsQueryable();
            //}
            ///// <summary>
            ///// Add new entity
            ///// </summary>
            //public void Add<T>(T entityToCreate) where T : class
            //{
            //    _db.Set<T>().Add(entityToCreate);
            //    this.SaveChanges();
            //}
            ///// <summary>
            ///// Update an existing entity
            ///// </summary>
            //public void Update<T>(T entityToUpdate) where T : class
            //{
            //    _db.Set<T>().Update(entityToUpdate);
            //    this.SaveChanges();
            //}
            ///// <summary>
            ///// Delete an existing entity
            ///// </summary>
            //public void Delete<T>(T entityToDelete) where T : class
            //{
            //    _db.Set<T>().Remove(entityToDelete);
            //    this.SaveChanges();
            //}
            ///// <summary>
            ///// Execute stored procedures and dynamic sql
            ///// </summary>
            //public IQueryable<T> SqlQuery<T>(string sql, params object[] parameters) where T : class
            //{
            //    return _db.Set<T>().FromSql(sql, parameters);
            //}
            ///// <summary>
            ///// Save changes to the database
            ///// </summary>
            //public void SaveChanges()
            //{
            //    _db.SaveChanges();
            //}
            //public void Dispose()
            //{
            //    _db.Dispose();
            //}
